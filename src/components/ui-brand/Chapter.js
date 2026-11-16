// Chapter header: mono number + name, a headline, and an optional lead.
export function ChapterHead({ n, name, title, lead, id, className = "" }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-7">
        <p className="j-chapter mb-5"><b>{n}</b> {name}</p>
        <h2 id={id} className="j-h2 text-ink">{title}</h2>
      </div>
      {lead && <p className="j-lead lg:col-span-5">{lead}</p>}
    </div>
  );
}
