import { render, screen } from '@testing-library/react';
import Filters from '../../components/Forecast/Filters/Filters';


describe('Filters Component', () => {
    it('renders filter on page', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let filters = {};
        const updateFilters = (val: any) => { filters = val }
        render(
            <Filters
                updateFilters={(_event, _field, value) => { updateFilters(value); }}
                getFilterIndex={(_field, _value) => { return; }}
                clearFilters={function (_field?: string | undefined): void {
                    throw new Error('Function not implemented.');
                }} />
        );
        expect(screen.getByTestId('filters-column')).toBeInTheDocument();
    });
})