import { render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';

test('renders article title and abstract', () => {
  const article = {
    title: 'Sample Article',
    abstract: 'This is a sample abstract.',
    url: 'http://example.com',
  };

  render(<ArticleCard article={article} />);

  expect(screen.getByText('Sample Article')).toBeInTheDocument();
  expect(screen.getByText('This is a sample abstract.')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    'http://example.com',
  );
});
