import { render, screen } from '@testing-library/react';
import Banner from '../../components/Homepage/Banner';


describe('Banner Component', () => {
    it('renders banner on page', () => {
        render(<Banner />);
        expect(screen.getByTestId('homepage-banner')).toBeInTheDocument();
    });
})