module.exports = {
  name: 'web-frantaapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-frantaapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
