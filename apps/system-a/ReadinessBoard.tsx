import { Badge, Card, CardTitle } from "@studymate/ui-components";
import { getReadinessStatus } from "@studymate/utils";

export type ReadinessTopic = {
  title: string;
  score: number;
};

const topics: ReadinessTopic[] = [
  { title: "React Components", score: 85 },
  { title: "TypeScript Props", score: 68 },
  { title: "State Management", score: 45 },
  { title: "Monorepo Packages", score: 74 },
];

export function ReadinessBoard() {
  return (
    <Card>
      <CardTitle>Readiness Board</CardTitle>
      <div className="topic-list">
        {topics.map((topic) => {
          const status = getReadinessStatus(topic.score);
          return (
            <div className="topic-row" key={topic.title}>
              <div>
                <strong>{topic.title}</strong>
                <p>{topic.score}% confidence</p>
              </div>
              <Badge>{status}</Badge>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
