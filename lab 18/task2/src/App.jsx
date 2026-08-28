import { intervalToDuration } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AgeResult from "./components/AgeResult";
import BirthdayForm from "./components/BirthdayForm";
import "./App.css";

const fields = {
  day: {
    required: "This field is required",
    validate: (value) =>
      (Number(value) >= 1 && Number(value) <= 31) || "Must be a valid day",
  },
  month: {
    required: "This field is required",
    validate: (value) =>
      (Number(value) >= 1 && Number(value) <= 12) || "Must be a valid month",
  },
  year: {
    required: "This field is required",
    validate: (value) =>
      (Number(value) >= 1 && Number(value) <= new Date().getFullYear()) ||
      "Must be a valid year",
  },
};

function App() {
  const [age, setAge] = useState(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  function calculateAge({ day, month, year }) {
    const birthday = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();
    const isValidDate =
      birthday.getFullYear() === Number(year) &&
      birthday.getMonth() === Number(month) - 1 &&
      birthday.getDate() === Number(day);

    if (!isValidDate) {
      setError("day", { type: "validate", message: "Must be a valid date" });
      setAge(null);
      return;
    }

    if (birthday > today) {
      setError("year", { type: "validate", message: "Must be in the past" });
      setAge(null);
      return;
    }

    const duration = intervalToDuration({ start: birthday, end: today });
    setAge({
      years: duration.years ?? 0,
      months: duration.months ?? 0,
      days: duration.days ?? 0,
    });
  }

  return (
    <main className="calculator-shell">
      <section className="calculator" aria-labelledby="page-title">
        <h1 id="page-title" className="sr-only">
          Age calculator
        </h1>
        <BirthdayForm
          register={register}
          errors={errors}
          fields={fields}
          onSubmit={handleSubmit(calculateAge)}
        />
        <div className="divider" />
        <AgeResult age={age} />
      </section>
    </main>
  );
}

export default App;
