'use client';

type Props = {
  title: string;
  description: string;
  type: 'Template' | 'Guide' | 'Tool' | 'Skill';
  onClaim: (title: string) => void;
};

const typeColor: Record<Props['type'], string> = {
  Template: 'text-accent',
  Guide: 'text-success',
  Tool: 'text-muted-strong',
  Skill: 'text-accent',
};

export default function ResourceCard({ title, description, type, onClaim }: Props) {
  return (
    <div className="card-surface flex h-full flex-col p-7">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full border border-border bg-bg px-3 py-1 text-[10px] font-mono uppercase tracking-wider ${typeColor[type]}`}
        >
          {type}
        </span>
        <span className="text-xs font-semibold text-muted">Free</span>
      </div>
      <h3 className="mt-5 text-xl font-extrabold leading-tight">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-strong">{description}</p>
      <button onClick={() => onClaim(title)} className="btn-primary mt-6 w-full justify-center">
        Get it free
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
