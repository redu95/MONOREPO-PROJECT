"use client";

import { useMemo, useState } from "react";
import {
    Badge,
    Button,
    Card,
    CardDescription,
    CardTitle,
} from "@monorepo/ui-components";
import { clamp, shuffleArray } from "@monorepo/utils";

export type Flashcard = { front: string; back: string };

export function FlashcardDeck({
    title,
    description,
    cards,
    shuffleOnMount = true,
}: {
    title: string;
    description?: string;
    cards: Flashcard[];
    shuffleOnMount?: boolean;
}) {
    const initial = useMemo(
        () => (shuffleOnMount ? shuffleArray(cards) : cards),
        [cards, shuffleOnMount]
    );

    const [order, setOrder] = useState<Flashcard[]>(initial);
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const current = order[index] ?? order[0];
    const progress =
        order.length === 0
            ? 0
            : clamp((index / order.length) * 100, 0, 100);

    function next() {
        setFlipped(false);
        setIndex((i) => clamp(i + 1, 0, Math.max(order.length - 1, 0)));
    }

    function prev() {
        setFlipped(false);
        setIndex((i) => clamp(i - 1, 0, Math.max(order.length - 1, 0)));
    }

    function reshuffle() {
        setOrder(shuffleArray(order));
        setIndex(0);
        setFlipped(false);
    }

    if (!order.length) {
        return (
            <Card className="max-w-xl">
                <CardTitle>No cards</CardTitle>
                <CardDescription>Add flashcards via system configuration props.</CardDescription>
            </Card>
        );
    }

    return (
        <Card className="max-w-xl">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <CardTitle>{title}</CardTitle>
                    {description ? (
                        <CardDescription>{description}</CardDescription>
                    ) : null}
                </div>
                <Badge>
                    Card {index + 1}/{order.length}
                </Badge>
            </div>

            <button
                type="button"
                aria-label={
                    flipped
                        ? "Show question side again"
                        : "Reveal answer"
                }
                onClick={() => setFlipped(!flipped)}
                className="mt-6 flex min-h-[9rem] w-full flex-col justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-left text-zinc-900 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700"
            >
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                    {flipped ? "Answer" : "Prompt"}
                </span>
                <span className="mt-3 text-xl font-medium leading-snug">
                    {flipped ? current!.back : current!.front}
                </span>
            </button>

            <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="secondary" onClick={prev} disabled={index === 0}>
                    Previous
                </Button>
                <Button onClick={next} disabled={index >= order.length - 1}>
                    Next
                </Button>
                <Button variant="ghost" onClick={reshuffle}>
                    Shuffle
                </Button>
            </div>

            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                Tap the card to flip. Progress mirrors session position (composite logic + UI primitives live in packages).
            </p>
        </Card>
    );
}
