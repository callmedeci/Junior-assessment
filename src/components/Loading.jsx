import { SpinnerGapIcon } from '@phosphor-icons/react';

function Loading() {
  return (
    <div>
      <SpinnerGapIcon className='animate-spin text-zinc-200 size-7' />
    </div>
  );
}

export default Loading;
