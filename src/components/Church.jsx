import { FlexboxGrid } from "rsuite";

const Church = () => {
  return (
      <div class="Church">
        
        <div className="show-grid">
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={8}>Sobota</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              12 października 2024 r.
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>o godzinie 14:00</FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
        Kościele Ewangelickim w Pszczynie ul. Rynek 1
      </div>
  );
};

export default Church;
