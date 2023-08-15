import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  contactWay,
  materialColor,
  materialType,
  printAccuracy,
} from "../../enums/enums";

const FormComponent = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    // Обработка данных после отправки формы
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Имя:</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} type="text" className="border p-2 w-full" />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Номер телефона:</label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} type="tel" className="border p-2 w-full" />
          )}
        />
        <div>
          <h2>{contactWay.TITLE}</h2>
          {contactWay.OPTIONS.map((way) => (
            <label className="mr-2" key={way}>
              <input {...register("phoneType")} value={way} type="radio" />
              {way}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">{materialType.TITLE}</label>
        <div>
          {materialType.OPTIONS.map((material) => (
            <label className="mr-2" key={material}>
              <input
                {...register("materialType")}
                value={material}
                type="radio"
              />
              {material}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">{printAccuracy.TITLE}</label>
        <div>
          {printAccuracy.OPTIONS.map((accuracy) => (
            <label className="mr-2" key={accuracy}>
              <input
                {...register("printAccuracy")}
                value={accuracy}
                type="radio"
              />
              {accuracy}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">{materialColor.TITLE}</label>
        <div>
          {materialColor.OPTIONS.map((color) => (
            <label className="mr-2" key={color}>
              <input
                {...register("materialColor")}
                value={color}
                type="radio"
              />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Прикрепить файл:</label>
        <input {...register("attachedFile")} type="file" />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Отправить
      </button>
    </form>
  );
};

export default FormComponent;
