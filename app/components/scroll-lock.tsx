"use client";

import { useEffect } from "react";

export function ScrollLock() {
    useEffect(() => {
        const { body, documentElement: html } = document;
        const prev = {
            bodyOverflow: body.style.overflow,
            htmlOverflow: html.style.overflow,
            overscroll: body.style.overscrollBehavior,
        };
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        body.style.overscrollBehavior = "none";
        return () => {
            body.style.overflow = prev.bodyOverflow;
            html.style.overflow = prev.htmlOverflow;
            body.style.overscrollBehavior = prev.overscroll;
        };
    }, []);

    return null;
}
