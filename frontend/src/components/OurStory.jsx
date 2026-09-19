import { useReveal } from '../hooks/useReveal.js';

function StoryItem({ item }) {
  const [ref, visible] = useReveal(0.25);

  return (
    <div ref={ref} className={`story-item reveal ${visible ? 'visible' : ''}`}>
      <div className="story-dot"></div>
      <div className="story-date">{item.date}</div>
      <div className="story-title">{item.title}</div>
      <div className="story-desc">{item.description}</div>
    </div>
  );
}

export default function OurStory({ story }) {
  const [ref, visible] = useReveal();

  if (!story || story.length === 0) return null;

  return (
    <section id="our-story" ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      <div className="eyebrow-flourish"><span>Our Story</span></div>
      <div className="story-timeline">
        {story.map((item, i) => (
          <StoryItem item={item} key={i} />
        ))}
      </div>
    </section>
  );
}