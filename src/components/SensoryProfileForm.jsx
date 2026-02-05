import { useEffect, useMemo, useState } from 'react';

const defaultForm = {
  childName: '',
  age: '',
  favoriteColor: '',
  favoriteFabric: '',
  tagsBother: '',
  fitPreference: '',
  consent: false,
};

const FABRIC_OPTIONS = ['Cotton', 'Soft Knit', 'Fleece'];
const COLOR_OPTIONS = ['Blue', 'Green', 'Purple', 'Pink', 'Yellow', 'Orange'];

const SensoryProfileForm = ({ onSubmit, title = 'ASD Clothing Comfort Profile', initialValues }) => {
  const [form, setForm] = useState({ ...defaultForm, ...initialValues });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setForm({ ...defaultForm, ...initialValues });
    }
  }, [initialValues]);

  const completion = useMemo(() => {
    const requiredFields = ['childName', 'age', 'favoriteColor', 'favoriteFabric', 'tagsBother', 'fitPreference'];
    const filled = requiredFields.filter((key) => String(form[key]).trim().length > 0).length;
    return Math.round((filled / requiredFields.length) * 100);
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = (values) => {
    const nextErrors = {};
    if (!values.childName.trim()) nextErrors.childName = 'Please enter a name.';
    if (!values.age) nextErrors.age = 'Please enter age.';
    if (!values.favoriteColor) nextErrors.favoriteColor = 'Pick a color.';
    if (!values.favoriteFabric) nextErrors.favoriteFabric = 'Pick a fabric.';
    if (!values.tagsBother) nextErrors.tagsBother = 'Choose yes or no.';
    if (!values.fitPreference) nextErrors.fitPreference = 'Choose a fit.';
    if (!values.consent) nextErrors.consent = 'Consent is required.';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0 && typeof onSubmit === 'function') {
      const payload = {
        ...form,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem('sensoryProfile', JSON.stringify(payload));
      onSubmit(payload);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8 animate-slide-up">
      <div className="bg-slate-800/90 border border-slate-700 rounded-3xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Help personalize clothing suggestions for comfort and confidence.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-center">
            <p className="text-xs text-slate-400">Form Completion</p>
            <p className="text-xl font-bold text-indigo-300">{completion}%</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-slate-300 font-medium">
              Child Name
              <input
                name="childName"
                value={form.childName}
                onChange={handleChange}
                placeholder="e.g., Aarav"
                className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {submitted && errors.childName && (
                <span className="text-rose-400 text-sm font-semibold">{errors.childName}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 text-slate-300 font-medium">
              Age
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                type="number"
                min="1"
                max="18"
                placeholder="e.g., 6"
                className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {submitted && errors.age && (
                <span className="text-rose-400 text-sm font-semibold">{errors.age}</span>
              )}
            </label>
          </div>

          <div>
            <p className="text-slate-300 font-semibold mb-2">Favorite fabric</p>
            <div className="flex flex-wrap gap-2">
              {FABRIC_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setForm((prev) => ({ ...prev, favoriteFabric: option }))}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                    form.favoriteFabric === option
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-indigo-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {submitted && errors.favoriteFabric && (
              <span className="text-rose-400 text-sm font-semibold">{errors.favoriteFabric}</span>
            )}
          </div>

          <div>
            <p className="text-slate-300 font-semibold mb-2">Favorite color</p>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setForm((prev) => ({ ...prev, favoriteColor: option }))}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                    form.favoriteColor === option
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {submitted && errors.favoriteColor && (
              <span className="text-rose-400 text-sm font-semibold">{errors.favoriteColor}</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-slate-300 font-semibold mb-2">Do tags bother you?</p>
              <div className="flex gap-3">
                {['yes', 'no'].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setForm((prev) => ({ ...prev, tagsBother: option }))}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                      form.tagsBother === option
                        ? 'bg-rose-600 text-white border-rose-500'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-rose-500'
                    }`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
              {submitted && errors.tagsBother && (
                <span className="text-rose-400 text-sm font-semibold">{errors.tagsBother}</span>
              )}
            </div>

            <div>
              <p className="text-slate-300 font-semibold mb-2">Fit feels best</p>
              <div className="flex gap-3 flex-wrap">
                {['loose', 'regular', 'snug'].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setForm((prev) => ({ ...prev, fitPreference: option }))}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                      form.fitPreference === option
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-indigo-500'
                    }`}
                  >
                    {option === 'loose' ? 'Loose' : option === 'regular' ? 'Regular' : 'Snug'}
                  </button>
                ))}
              </div>
              {submitted && errors.fitPreference && (
                <span className="text-rose-400 text-sm font-semibold">{errors.fitPreference}</span>
              )}
            </div>
          </div>

          <label className="flex items-start gap-3 text-slate-300 text-sm">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-5 w-5 accent-indigo-500"
            />
            I confirm this information can be used to personalize clothing suggestions.
          </label>
          {submitted && errors.consent && (
            <p className="text-rose-400 text-sm font-semibold">{errors.consent}</p>
          )}

          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg transition-all active:scale-95"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SensoryProfileForm;
