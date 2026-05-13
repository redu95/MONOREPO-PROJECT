"use client";

import { useMemo, useState } from "react";
import {
    Badge,
    Button,
    Card,
    CardDescription,
    CardTitle,
} from "@monorepo/ui-components";
import { shuffleArray } from "@monorepo/utils";

export type StandupMember = {
    id: string;
    name: string;
};

export function StandupQueue({
    title,
    description,
    members,
}: {
    title: string;
    description?: string;
    members: StandupMember[];
}) {
    const [queue, setQueue] = useState<StandupMember[]>(members);
    const [index, setIndex] = useState(0);

    const current = useMemo(() => queue[index] ?? null, [queue, index]);

    function nextSpeaker() {
        setIndex((prev) => Math.min(prev + 1, Math.max(queue.length - 1, 0)));
    }

    function resetRandom() {
        setQueue(shuffleArray(queue));
        setIndex(0);
    }

    return (
        <Card className="max-w-xl">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <CardTitle>{title}</CardTitle>
                    {description ? <CardDescription>{description}</CardDescription> : null}
                </div>
                <Badge>
                    {queue.length === 0 ? "No speakers" : `${Math.min(index + 1, queue.length)}/${queue.length}`}
                </Badge>
            </div>

            <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Now speaking</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {current ? current.name : "Queue is empty"}
                </p>
            </div>

            <ol className="mt-5 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {queue.map((person, i) => (
                    <li key={person.id} className={i === index ? "font-semibold text-teal-700 dark:text-teal-300" : ""}>
                        {person.name}
                    </li>
                ))}
            </ol>

            <div className="mt-5 flex flex-wrap gap-2">
                <Button onClick={nextSpeaker} disabled={queue.length === 0 || index >= queue.length - 1}>
                    Next speaker
                </Button>
                <Button variant="secondary" onClick={resetRandom} disabled={queue.length < 2}>
                    Randomize order
                </Button>
            </div>
        </Card>
    );
}
