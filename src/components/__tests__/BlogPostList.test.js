import { render, screen } from "@testing-library/react";
import BlogPostList from "../BlogList";

test("renders loading state", () => {
  render(<BlogPostList />);
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
