import React, { Component } from 'react';
import { CLOTHING_DATA } from '../data';

const ITEM_OPTIONS = ['T-shirt', 'Shirt', 'Sweater', 'Jacket', 'Pants', 'Shorts', 'Shoes', 'Cap'];
const CATEGORY_OPTIONS = ['Tops', 'Bottoms', 'Footwear', 'Headwear'];
const FEELING_OPTIONS = ['Happy', 'Okay', 'Uncomfortable'];

const CATEGORY_LABELS = {
  upper: 'Tops',
  lower: 'Bottoms',
  feet: 'Footwear',
  head: 'Headwear',
  onepiece: 'Full Body',
};

const ITEM_CATEGORY_MAP = Object.entries(CLOTHING_DATA).reduce((acc, [key, items]) => {
  const label = CATEGORY_LABELS[key] || key;
  items.forEach((item) => {
    acc[item.name.toLowerCase()] = label;
  });
  return acc;
}, {});

class ClothesLearnedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnedItems: [],
      learnedCategories: {},
      feeling: '',
      status: null,
      submitted: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleItem = (item) => {
    this.setState((prev) => {
      const current = new Set(prev.learnedItems);
      if (current.has(item)) {
        current.delete(item);
      } else {
        current.add(item);
      }
      const nextItems = Array.from(current);
      const nextCategories = { ...prev.learnedCategories };
      Object.keys(nextCategories).forEach((key) => {
        if (!nextItems.includes(key)) delete nextCategories[key];
      });
      return { learnedItems: nextItems, learnedCategories: nextCategories };
    });
  };

  validate = () => {
    const errors = {};
    const { learnedItems, learnedCategories, feeling } = this.state;

    if (learnedItems.length === 0) errors.learnedItems = 'Pick at least 1 item.';
    learnedItems.forEach((item) => {
      if (!learnedCategories[item]) {
        errors[`category-${item}`] = 'Pick a category for this item.';
      } else {
        const expected = ITEM_CATEGORY_MAP[item.toLowerCase()];
        if (expected && learnedCategories[item] !== expected) {
          errors[`category-${item}`] = `Wrong category. Try ${expected}.`;
        }
      }
    });
    if (!feeling) errors.feeling = 'Choose a feeling.';

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ submitted: true, errors, status: null });

    if (Object.keys(errors).length === 0) {
      this.setState({ status: 'success' });
      if (typeof this.props.onSubmit === 'function') this.props.onSubmit();
    } else {
      this.setState({ status: 'error' });
    }
  };

  render() {
    const { onBack } = this.props;
    const { learnedItems, learnedCategories, feeling, submitted, errors, status } = this.state;

    const isItemsValid = learnedItems.length > 0;
    const areCategoriesValid = learnedItems.every((item) => {
      const expected = ITEM_CATEGORY_MAP[item.toLowerCase()];
      return learnedCategories[item] && learnedCategories[item] === expected;
    });
    const isFeelingValid = Boolean(feeling);

    return (
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8 animate-slide-up">
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">Clothes I Learned Today</h2>
              <p className="text-slate-400 text-sm md:text-base">
                Pick clothes you learned and how you felt about them.
              </p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full text-sm font-bold transition-all"
            >
              Back Home
            </button>
          </div>

          <form onSubmit={this.handleSubmit} className="space-y-6">
            <div>
              <p className="text-slate-300 font-semibold mb-2">Today I learned</p>
              <div className="flex flex-wrap gap-2">
                {ITEM_OPTIONS.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => this.toggleItem(item)}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                      learnedItems.includes(item)
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-indigo-500'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {submitted && errors.learnedItems && (
                <span className="text-rose-400 text-sm font-semibold">{errors.learnedItems}</span>
              )}
            </div>

            {learnedItems.length > 0 && (
              <div className="space-y-3">
                <p className="text-slate-300 font-semibold">Match each item to a category</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {learnedItems.map((item) => (
                    <label key={item} className="flex flex-col gap-2 text-slate-300 font-medium">
                      {item}
                      <select
                        value={learnedCategories[item] || ''}
                        onChange={(e) =>
                          this.setState((prev) => ({
                            learnedCategories: {
                              ...prev.learnedCategories,
                              [item]: e.target.value,
                            },
                          }))
                        }
                        className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Choose category</option>
                        {CATEGORY_OPTIONS.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {submitted && errors[`category-${item}`] && (
                        <span className="text-rose-400 text-sm font-semibold">
                          {errors[`category-${item}`]}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <label className="flex flex-col gap-2 text-slate-300 font-medium">
              Feeling after learning
              <select
                name="feeling"
                value={feeling}
                onChange={this.handleChange}
                className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose</option>
                {FEELING_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {submitted && errors.feeling && (
                <span className="text-rose-400 text-sm font-semibold">{errors.feeling}</span>
              )}
            </label>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                {status === 'success' && (
                  <p className="text-emerald-400 text-sm font-semibold">Great job! Form submitted.</p>
                )}
                {status === 'error' && (
                  <p className="text-rose-400 text-sm font-semibold">Please fix the highlighted fields.</p>
                )}
              </div>
              <button
                type="submit"
                className="ml-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg transition-all active:scale-95"
              >
                Submit
              </button>
            </div>

            {submitted && (
              <div className="mt-6 bg-slate-900/70 border border-slate-700 rounded-2xl p-4">
                <p className="text-slate-300 font-semibold mb-3">Check Results</p>
                <ul className="space-y-2 text-sm">
                  <li className={`flex items-center gap-2 ${isItemsValid ? 'text-emerald-400' : 'text-rose-400'}`}>
                    <span className="text-base">{isItemsValid ? '✅' : '❌'}</span>
                    Picked at least 1 item
                  </li>
                  <li className={`flex items-center gap-2 ${areCategoriesValid ? 'text-emerald-400' : 'text-rose-400'}`}>
                    <span className="text-base">{areCategoriesValid ? '✅' : '❌'}</span>
                    Correct category for each item
                  </li>
                  <li className={`flex items-center gap-2 ${isFeelingValid ? 'text-emerald-400' : 'text-rose-400'}`}>
                    <span className="text-base">{isFeelingValid ? '✅' : '❌'}</span>
                    Selected a feeling
                  </li>
                </ul>

                {learnedItems.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {learnedItems.map((item) => {
                      const expected = ITEM_CATEGORY_MAP[item.toLowerCase()];
                      const chosen = learnedCategories[item];
                      const isCorrect = chosen && expected && chosen === expected;
                      return (
                        <div
                          key={`result-${item}`}
                          className={`flex items-center justify-between rounded-xl px-3 py-2 border ${
                            isCorrect
                              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                              : 'border-rose-500/40 bg-rose-500/10 text-rose-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{isCorrect ? '✅' : '❌'}</span>
                            <span className="font-semibold">{item}</span>
                          </div>
                          <span className="text-xs">
                            {isCorrect ? `Correct: ${chosen}` : `Correct: ${expected || 'N/A'}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default ClothesLearnedForm;
