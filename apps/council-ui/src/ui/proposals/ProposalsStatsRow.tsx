import classNames from "classnames";
import Link from "next/link";
import { ReactElement } from "react";
import { makeEtherscanTransactionURL } from "src/etherscan/makeEtherscanTransactionURL";
import { makeVoterURL } from "src/routes";
import { Address } from "src/ui/base/Address";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useDisplayName } from "src/ui/base/formatting/useDisplayName";
import { Stat } from "src/ui/base/Stat";
import { ExternalLinkSVG } from "src/ui/base/svg/ExternalLink";
import { DefinitionTooltip } from "src/ui/base/Tooltip/Tooltip";
import { WalletIcon } from "src/ui/base/WalletIcon";

interface ProposalStatsRowProps {
  votingContractAddress: string;
  createdBy: string | null;
  createdTransactionHash: string | null;
  createdAtDate: Date | null;
  endsAtDate: Date | null;
  unlockAtDate: Date | null;
  lastCallAtDate: Date | null;
  className?: string;
}

export function ProposalStatsRow({
  votingContractAddress,
  createdBy,
  createdAtDate,
  createdTransactionHash,
  endsAtDate,
  unlockAtDate,
  lastCallAtDate,
  className,
}: ProposalStatsRowProps): ReactElement {
  const createdByDisplayName = useDisplayName(createdBy);
  return (
    <div className={classNames("flex flex-wrap gap-4", className)}>
      <Stat
        label="Voting contract"
        value={<Address address={votingContractAddress} />}
      />

      {createdByDisplayName && createdBy && (
        <Stat
          label={
            <DefinitionTooltip content="The creator of the on-chain proposal, which may or may not be the author.">
              Created by
            </DefinitionTooltip>
          }
          value={
            <Link
              className="flex items-center hover:underline"
              href={makeVoterURL(createdBy)}
            >
              <WalletIcon address={createdBy} size={16} className="mr-1" />
              {createdByDisplayName}
            </Link>
          }
        />
      )}
      {createdTransactionHash && (
        <Stat
          label="Created Transaction"
          value={
            <Link
              className="flex items-center hover:underline"
              href={makeEtherscanTransactionURL(createdTransactionHash)}
            >
              {formatAddress(createdTransactionHash)}
              <ExternalLinkSVG />
            </Link>
          }
        />
      )}

      {createdAtDate && (
        <Stat label="Created at" value={createdAtDate.toLocaleDateString()} />
      )}

      {unlockAtDate && (
        <Stat label="Executable on" value={unlockAtDate.toLocaleDateString()} />
      )}

      {endsAtDate && (
        <Stat label="Voting ends" value={endsAtDate.toLocaleDateString()} />
      )}

      {lastCallAtDate && (
        <Stat
          label="Execution deadline"
          value={lastCallAtDate.toLocaleDateString()}
        />
      )}
    </div>
  );
}