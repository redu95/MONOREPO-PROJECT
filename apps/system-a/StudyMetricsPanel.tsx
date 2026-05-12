import { Card, CardTitle, ProgressBar, StatCard } from "@studymate/ui-components";
import { calculatePercent } from "@studymate/utils";

export function StudyMetricsPanel() {
  const reviewed = 28;
  const totalCards = 40;
  const correct = 22;
  const studyGoal = 75;
  const progress = calculatePercent(reviewed, totalCards);
  const accuracy = calculatePercent(correct, reviewed);

  return (
    <Card>
      <CardTitle>Study Metrics</CardTitle>
      <div className="stats-grid">
        <StatCard label="Reviewed" value={`${reviewed}/${totalCards}`} helper="cards practiced" />
        <StatCard label="Accuracy" value={`${accuracy}%`} helper="correct answers" />
        <StatCard label="Goal" value={`${studyGoal}%`} helper="daily target" />
      </div>
      <ProgressBar label="Deck Progress" value={progress} />
    </Card>
  );
}
