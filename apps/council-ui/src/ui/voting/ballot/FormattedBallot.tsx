import { Ballot } from "@council/sdk";
import { ReactElement } from "react";

interface FormattedBallotProps {
  ballot: Ballot;
}

export default function FormattedBallot({
  ballot,
}: FormattedBallotProps): ReactElement {
  switch (ballot) {
    case "yes":
      return <h2 className="text-success font-semibold uppercase">{ballot}</h2>;

    case "no":
      return <h2 className="text-error font-semibold uppercase">{ballot}</h2>;

    case "maybe":
      return <h2 className="font-semibold uppercase">{ballot}</h2>;
  }
}