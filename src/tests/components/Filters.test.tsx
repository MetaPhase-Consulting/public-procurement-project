import { render, screen } from '@testing-library/react';
import Filters from '../../components/ForecastList/Filters/Filters';


describe('Filters Component', () => {
    it('renders filter on page', () => {
        let filters = {};
        const updateFilters = (val: any) => { filters = val }
        render(
            <Filters
                updateFilters={(_event, _field, value) => { updateFilters(value) }}
                getFilterIndex={(_field, _value) => { return }}
            />
        );
        expect(screen.getByTestId('filters-column')).toBeInTheDocument();
    });
})