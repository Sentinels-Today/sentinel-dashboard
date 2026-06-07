import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TrustBadge } from "./TrustBadge";

describe("TrustBadge", () => {
  it("renders score and level", () => {
    render(<TrustBadge score={{ score: 95, level: "verified" }} />);
    const badge = screen.getByTestId("trust-badge");
    expect(badge).toHaveTextContent("verified");
    expect(badge).toHaveTextContent("95/100");
  });

  it("changes colour by level", () => {
    const { rerender } = render(<TrustBadge score={{ score: 10, level: "critical" }} />);
    expect(screen.getByTestId("trust-badge")).toHaveTextContent("critical");
    rerender(<TrustBadge score={{ score: 75, level: "high" }} />);
    expect(screen.getByTestId("trust-badge")).toHaveTextContent("high");
  });
});
