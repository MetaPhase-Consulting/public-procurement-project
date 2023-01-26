import { render, screen } from "@testing-library/react";
import Filters from '../../components/ForecastList/Filters/Filters';


describe('Filters Component', () => {
    it('renders filter on page', () => {
        render(<Filters />);
        expect(screen.getByTestId("filters-column")).toBeInTheDocument();
    });
})