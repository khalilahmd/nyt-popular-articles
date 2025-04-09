import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';
import { fetchArticles } from '../services/articleService';

jest.mock('../services/articleService');

test('renders articles correctly', async () => {
  const mockArticles = [
    {
      title: 'Article 1',
      abstract: 'Abstract for article 1',
      url: 'http://example.com/article1',
    },
    {
      title: 'Article 2',
      abstract: 'Abstract for article 2',
      url: 'http://example.com/article2',
    },
  ];

  fetchArticles.mockResolvedValue(mockArticles);

  render(<ArticleList />);

  await screen.findByText('Article 1');

  expect(screen.getByText('Article 1')).toBeInTheDocument();
  expect(screen.getByText('Article 2')).toBeInTheDocument();
  expect(screen.getByText('Abstract for article 1')).toBeInTheDocument();
});
