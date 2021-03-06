import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import {
  failureThreshold,
  getStorybookUrl,
  customizePage,
  beforeScreenshot
} from "./helpers";

initStoryshots({
  suite: "Image storyshots",
  framework: "react",
  test: imageSnapshot({
    storybookUrl: getStorybookUrl(),
    getMatchOptions: failureThreshold,
    customizePage,
    beforeScreenshot
  })
});
