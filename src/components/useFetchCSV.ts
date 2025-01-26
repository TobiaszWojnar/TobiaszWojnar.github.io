import { useState, useEffect } from "react";
import {EventDataType,TimePeriodDataType} from './types.ts'
import * as Papa from "papaparse";

const useFetchCSV = (eventsSources: any[], timePeriodsSources: any[]) => {
  const [eventsData, setEventsData] = useState([])
  const [timePeriodsData, setTimePeriodsData] = useState([])
  const [minDate, setMinDate] = useState<number>();
  const [maxDate, setMaxDate] = useState<number>();
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState<string|boolean>(false);
  const [error, setError] = useState<object|boolean>(false);

  const removeQuotes = (str: string) => {
    if (str.startsWith('"') && str.endsWith('"')) {
      return str.slice(1, -1);
    } else if (str.startsWith("'") && str.endsWith("'")) {
      return str.slice(1, -1);
    } else {
      return str;
    }
  }

  const parseCSVData = (csvData: any) => {
    return Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim(),
    }).data.map((e: any) => {
      return {
        ...Object.fromEntries(
          Object.entries(e).map(([key, value]) => [
            key,
            removeQuotes((value as string).trim()),
          ])
        ),
        tags: e.tags.split(",").map((tag: string) => tag.trim()),
      };
    });
  }

  const setMinMaxDates = (eventsData: EventDataType[]) => {
    setMinDate(
      Math.min(
        ...eventsData.flat().map((e) => Number((e).year))
      ));
    setMaxDate(
      Math.max(
        ...eventsData.flat().map((e) => Number((e).year))
      ));
  }
  const mergeTags = (newData: (EventDataType|TimePeriodDataType)[], oldData: string[]) => {
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
      setMinMax = false
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
          setError({message: `Error fetching data from ${csvFile}:`, error});
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