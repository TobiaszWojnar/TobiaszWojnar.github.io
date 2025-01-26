import { useState, useEffect } from "react";
import * as Papa from "papaparse";

const useFetchCSV = (eventsSources, timePeriodsSources) => {
  const [eventsData, setEventsData] = useState([])
  const [timePeriodsData, setTimePeriodsData] = useState([])
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const removeQuotes = (str) => {
    if (str.startsWith('"') && str.endsWith('"')) {
      return str.slice(1, -1);
    } else if (str.startsWith("'") && str.endsWith("'")) {
      return str.slice(1, -1);
    } else {
      return str;
    }
  }
  

  const parseCSVData = (csvData) => {
    return Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
    }).data.map((e) => {
      return {
        ...Object.fromEntries(
          Object.entries(e).map(([key, value]) => [
            key,
            removeQuotes((value).trim()),//TODO if wrapped in " or ' than 
          ])
        ),
        tags: e.tags.split(",").map((tag) => tag.trim()),
      };
    });
  }

  const setMinMaxDates = (eventsData) => {
    setMinDate(
      Math.min(
        ...eventsData.flat().map((e) => Number((e).year))
      ));
    setMaxDate(
      Math.max(
        ...eventsData.flat().map((e) => Number((e).year))
      ));
  }
  const mergeTags = (newData, oldData) => {
    return Array.from(
      (new Set(
        [...newData
          .map((e) => e.tags)
          .flat(), ...oldData]
      )
      )).sort()
  }

  useEffect(() => {
    const fetchCSVData = async (
      csvFiles,
      setData,
      setMinMax
    ) => {
      setLoading('Loading...')
      const promises = csvFiles.map(async (csvFile) => {
        try {
          const response = await fetch(csvFile);
          const reader = response.body?.getReader();
          const result = await reader?.read();
          const csvData = new TextDecoder("utf-8").decode(result?.value);

          const parsedData = parseCSVData(csvData);

          setLoading(false);
          return parsedData;
        } catch (error) {
          setLoading(false);
          setError(`Error fetching data from ${csvFile}:`, error);
        }
      });

      const allData = (await Promise.all(promises)).flat()

      setData(allData);
      setTags(currTags => mergeTags(allData, currTags));
      if (setMinMax) {
        setMinMaxDates(allData)
      }
    };

    fetchCSVData(eventsSources, setEventsData,true);
    fetchCSVData(timePeriodsSources, setTimePeriodsData); // Runs twice in strict mode
  }, []);

  return { loading, error, eventsData, timePeriodsData, tags, minDate, maxDate};
};

export default useFetchCSV;