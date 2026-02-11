import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { api } from '@/lib/api';
import PropertySearch from '@/components/tenant/listings/ListingFilters';

describe('Geographic Node Search Logic', () => {
    test('should filter asset nodes based on threshold telemetry', async () => {
        const onFilter = jest.fn();
        render(<PropertySearch onFilter={onFilter} />);

        // Simulate pricing threshold shift
        const priceInput = screen.getByLabelText(/Max Price/i);
        fireEvent.change(priceInput, { target: { value: '5000' } });

        // Trigger forensic search
        fireEvent.click(screen.getByText(/Apply Filters/i));

        expect(onFilter).toHaveBeenCalled();
    });
});
