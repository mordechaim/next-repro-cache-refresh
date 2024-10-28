import { unstable_cache } from 'next/cache';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const oldCache = unstable_cache(async () => new Date().toISOString());
  const newCache = async () => {
    'use cache';
    return new Date().toISOString();
  };

  return (
    <>
      <div>
        <h4>
          Cached with <code>unstable_cache</code>
        </h4>
        <p>{await oldCache()}</p>

        <h4>
          Cached with <code>"use cache"</code>
        </h4>
        <p>{await newCache()}</p>
      </div>

      <hr />

      <p>
        To purge cache (in Chrome):
        <ol>
          <li>Open devtools</li>
          <li>Right click on browser refresh icon</li>
          <li>Choose "Empty Cache and Hard Reload"</li>
        </ol>
      </p>
    </>
  );
}
