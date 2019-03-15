import {join, format, parse} from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import {shallow} from 'enzyme';
import {Stories2SnapsConverter} from '@storybook/addon-storyshots';
import serializer from './snapshots/serializer';


class CustomStories2SnapsConverter extends Stories2SnapsConverter {
  getSnapshotFileName(context) {
    const {fileName} = context;
    const {dir, name, ext} = parse(fileName);
    const uniqueName = `${name}${ext}`;
    const {snapshotsDirName, snapshotExtension} = this.options;

    const snapshotPath = format({
      dir: join(dir, snapshotsDirName),
      name: uniqueName,
      ext: snapshotExtension
    });
    return snapshotPath;
  }
}

const customSnapshotWithOptions = ()=> ({
  story,
  context,
  stories2snapsConverter
})=> {
  const snapshotFileName = stories2snapsConverter.getSnapshotFileName(context);
  const storyElement = story.render(context);
  const tree = shallow(storyElement);
  expect(tree).toMatchSpecificSnapshot(snapshotFileName);
  tree.unmount();
};

initStoryshots({
  configPath: 'storybook',
  stories2snapsConverter: new CustomStories2SnapsConverter({
    snapshotsDirName: '__snapshots__',
    snapshotExtension: '.snap'
  }),
  test: customSnapshotWithOptions(),
  snapshotSerializers: [serializer]
});
