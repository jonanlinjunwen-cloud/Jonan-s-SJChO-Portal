import { syllabusTopics } from './syllabus';
import { dataBooklet } from './dataBooklet';

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  section: string;
  category?: string;
  icon?: string;
}

function extractTextFromContent(content: string): string {
  return content
    .replace(/\*\*/g, '')
    .replace(/[#•\-\n]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Index syllabus topics
  syllabusTopics.forEach(topic => {
    // Add main topic
    results.push({
      id: `syllabus-${topic.id}`,
      title: topic.title,
      content: topic.description,
      section: 'Syllabus & Notes',
      category: topic.category,
      icon: topic.icon,
    });

    // Add key concepts
    topic.keyConcepts?.forEach(concept => {
      results.push({
        id: `syllabus-${topic.id}-${concept.title.toLowerCase().replace(/\s+/g, '-')}`,
        title: `${topic.title} → ${concept.title}`,
        content: extractTextFromContent(concept.content),
        section: 'Syllabus & Notes',
        category: topic.category,
        icon: topic.icon,
      });
    });
  });

  // Index data booklet items
  dataBooklet?.sections?.forEach(section => {
    results.push({
      id: `databooklet-${section.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: section.title,
      content: '',
      section: 'Data Booklet',
      icon: '📋',
    });

    section.items?.forEach(item => {
      const itemLabel = (item as any).name || (item as any).label || '';
      const itemValue = (item as any).value || (item as any).formula || '';
      results.push({
        id: `databooklet-${section.title}-${itemLabel}`,
        title: `${section.title} → ${itemLabel}`,
        content: itemValue,
        section: 'Data Booklet',
        icon: '📋',
      });
    });
  });

  return results;
}

export function searchTopics(query: string, index: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();
  
  return index.filter(result => 
    result.title.toLowerCase().includes(normalizedQuery) ||
    result.content.toLowerCase().includes(normalizedQuery)
  ).slice(0, 10); // Return top 10 results
}
