module.exports = {
  extends: ['cz'],
  parserPreset: {
    parserOpts: {
      // 校验带带git emoji的自定义commitzen
      headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never']
  }
}
