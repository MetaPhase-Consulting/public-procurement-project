import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";


describe('Layout Component', () => {
    it('renders page layout with children', () => {
        render(
            <Layout>
                <p>Content</p>
            </Layout>
        );
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    });
})