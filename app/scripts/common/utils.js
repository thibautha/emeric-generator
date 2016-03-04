import _ from 'lodash';

const Utils = {

  ucFirst(str) {
    str += '';
    const f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
  },

  generateRandomWordsCounter(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateSentenceFromWords(words, theme = null) {
    let vocabulary;

    if (theme) {
      vocabulary = words.fields[theme];
    } else {
      vocabulary = _.reduce(words.fields, (previous, field) => {
        return previous.concat(field);
      }, []);
    }

    vocabulary = _.take(
      _.shuffle(vocabulary),
      Utils.generateRandomWordsCounter(5, vocabulary.length - 1)
    );

    return Utils.ucFirst(vocabulary.join(' ')) + '.';
  },

  get(dataSource, options = {}) {
    const dataType = options.dataType || 'json';

    return new Promise((resolve, reject) => {
      fetch(dataSource)
        .then((response) => {
          switch (dataType) {
            case 'json':
              return response.json();
              break;
            default:
              return response.text();
          }
        })
        .then((result) => {
          if (result && result.length) {
            resolve(result[0]);
          } else {
            reject(null);
          }
        })
        .catch(reject);
    });
  }

}

export default Utils;
