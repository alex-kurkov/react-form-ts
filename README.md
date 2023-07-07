# чтобы начать после скачивания

```bash
npm i
#затем
npm start
```

реализованы базовые элементы ui-кита - `TextInput`, `RadioInput`, `Button`, `SignIn`, `SignUp`

Для уменьшения сложности (меньше ветвлений в рендер-функции, существенная разница в доступных пропсах) и большей читабельности компонент Input разбит на текстовый(`type=text|password|email`) и радио-инпуты 

Сигнатура пропсов `TextInput`:

```typescript
type Sizes = 's' | 'm' | 'l'

type TextInputProps = {
    name: string;
    variant?: 'plain' | 'bordered' | 'filled';
    radius?: Sizes;
    inputSize?: Sizes;
    error?: string | boolean;
    label?: string;
    description?: string;
    withAsterisk?: boolean;
    icon?: JSX.Element;
    type: 'text' | 'password' | 'email';
} & JSX.IntrinsicElements['input'];
```

что позволяет поддерживать в том числе явно не указанные стандартные аттрибуты элемента `input`

Аналогично - с пропсами  `RadioInput`:
```typescript
type Sizes = 's' | 'm' | 'l'

type RadioInputProps = {
    name: string;
    inputSize?: Sizes;
    label: string;
    radius?: Sizes;
    type: 'radio';
  } & JSX.IntrinsicElements['input'];
```

Стилизация компонентов через пропсы - при помощи присвоения классов (для удобства - объединение селекторов через либу `classnames`)

Инпуты - управляемые. Родительский компонент (`SignIn` или `SignUp`) оперирует стейтом со значениями инпутов и в соответсвии с ТЗ подставляет во время сабмита значения инпуотв в переданный сверху в пропсах колбек `onFormSubmit`

Из особенностей - так как приложение написано на TS, а также для возможности использования нативных аттрибутов реакт-компонентов, пришлось кое-где изменить нейминг - например, вместо пропса size на инпутах передавать inputSize, а вместо onSubmit в форму прокидывать onFormSubmit

legend, fieldset - не стилизованы (не было задачи), минимальная стилизация button и form

Стилизация компонентов не претендует на супер-эстетику - только чтобы реализовать ТЗ

Переключение между формами - по клику на вопрос внизу
