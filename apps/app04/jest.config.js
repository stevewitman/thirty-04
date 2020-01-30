module.exports = {
  name: 'app04',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app04',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
