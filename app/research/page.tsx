import { researchItems } from '../researchItems';
import ResearchCard from '../ResearchCard';

const highlightGreen = '#39ff14';

export default function ResearchPage() {
  return (
    <main>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: highlightGreen, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '600' }}>
          Research
        </h2>
        <div className="work-grid">
          {researchItems.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
