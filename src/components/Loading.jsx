import { SpinnerGapIcon } from '@phosphor-icons/react';

/**
 * @module Loading
 * @description A simple React component for displaying a loading spinner.
 */

function Loading() {
  return (
    <div>
      <SpinnerGapIcon className='animate-spin text-zinc-200 size-7' />
    </div>
  );
}

export default Loading;
