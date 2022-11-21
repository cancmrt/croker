import { BistStaticValueGetter } from "./jobs/croker-jobs/BistStaticValueGetter";

let job = new BistStaticValueGetter("BIST Daily Values Getter")
job.Start();