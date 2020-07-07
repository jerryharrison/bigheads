import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'

export const Back = () => {
  return <></>
}

export const Front = ({ hairColor, hasHat = false }: HairProps) => {
  const { colors, skin } = useTheme()

  const { base, shadow } = colors.hair[hairColor]

  return (
    <>
      {!hasHat && (
        <>
          <circle cx="499.7" cy="170.67" r="107.58" fill={base} />
          <path
            d="M559.29,397.34c-12.87,24-60,37.44-63.83,31.42-4.3-6.73,37.84-55.32,13.9-106.14"
            fill={skin.shadow}
          />
          <path
            d="M420.82,134.59A71.58,71.58,0,0,1,433,112.84c1.37-1.59,2.72-3.21,4.16-4.74s3-3,4.53-4.41,3.21-2.73,4.88-4,3.41-2.5,5.17-3.65,3.6-2.21,5.47-3.19l2.82-1.43a31,31,0,0,1,2.86-1.35c2-.76,3.89-1.62,5.89-2.29s4-1.32,6-1.81a72,72,0,0,1,24.86-2,112.32,112.32,0,0,0-24,5c-1,.26-1.9.7-2.85,1l-2.85,1c-1.88.73-3.69,1.65-5.54,2.45s-3.58,1.85-5.38,2.77-3.44,2.09-5.17,3.12-3.33,2.28-5,3.41-3.15,2.52-4.76,3.75-3,2.68-4.53,4l-4.28,4.31A110.47,110.47,0,0,0,420.82,134.59Z"
            fill={colors.white}
          />
          <path
            d="M409.8,229.76C429,259,435.67,233.25,498,233.25c107.21,0,73.62,25,92.69-5.15-27.59-9.65-44-19.39-88.13-19.39C460.26,208.71,438.69,219.05,409.8,229.76Z"
            fill={shadow}
          />
          <circle
            cx="499.7"
            cy="170.67"
            r="107.58"
            fill="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
        </>
      )}
      <path
        d="M421.52,244.56C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-69.46-138.26-2.43-241,61.1-2.32,152.42-14.38,195.78-62.86C496.18,398.87,484,415,486,418.18c2.88,4.51,38.19-5.53,47.84-23.54l.83-3.61c34.72,12.58,91.76,26.59,144,6.61C801.81,535.94,691.29,689,700.3,679a265.78,265.78,0,0,0,69-179c0-86.42-44.28-148.89-44.28-148.89C694.5,296.7,641.5,259.24,580.22,242"
        fill={base}
      />
      <path
        d="M326.66,439.38c5.38-52.22,25-112.5,64.7-181.9h0q-4.07,1.88-8.06,3.88l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53q-5.64,3-11.13,6.23l-.9.53c-1.16.69-2.31,1.39-3.46,2.1l-.86.54q-5.37,3.35-10.56,6.93l-1.08.75c-1.08.76-2.16,1.52-3.23,2.29l-.65.47q-3.27,2.39-6.47,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.18.94c-1,.81-2,1.62-3,2.45l0,0c-2.11,1.75-4.18,3.55-6.24,5.37l-1.14,1-2.69,2.45L320.53,305q-4.27,4-8.37,8.17l-1.37,1.41c-.8.82-1.59,1.64-2.37,2.47l-1.37,1.48Q305,320.77,303,323c-.46.51-.92,1-1.37,1.54-.71.81-1.41,1.63-2.11,2.46-.51.59-1,1.18-1.51,1.78-.68.81-1.36,1.62-2,2.44-.54.66-1.07,1.33-1.61,2-1.06,1.33-2.11,2.66-3.15,4-.55.7-1.09,1.4-1.62,2.11s-1.2,1.59-1.79,2.4l-1.59,2.18c-.56.78-1.13,1.55-1.68,2.33-.94,1.34-1.88,2.69-2.8,4.05-.5.73-1,1.48-1.48,2.22s-1.11,1.66-1.65,2.5-1,1.54-1.48,2.31-1.13,1.8-1.69,2.71c-.43.69-.86,1.38-1.28,2.07q-1.32,2.19-2.6,4.4c-.42.72-.82,1.44-1.23,2.16-.54.95-1.08,1.91-1.61,2.87-.4.73-.8,1.46-1.19,2.19-.64,1.19-1.27,2.39-1.89,3.59-.41.78-.81,1.56-1.21,2.34-.64,1.28-1.28,2.55-1.9,3.84-.34.69-.67,1.39-1,2.09-.52,1.09-1,2.19-1.54,3.29l-.91,2q-1.11,2.47-2.17,5c-.22.52-.43,1.05-.65,1.57-.53,1.27-1,2.54-1.56,3.82-.26.67-.53,1.34-.79,2-.49,1.26-1,2.53-1.45,3.8l-.61,1.65q-1,2.63-1.86,5.26l-.56,1.7q-.66,2-1.29,4c-.2.63-.4,1.27-.59,1.91q-.72,2.31-1.38,4.63c-.1.33-.2.66-.29,1q-.78,2.76-1.5,5.54l-.45,1.78c-.19.74-.37,1.49-.55,2.24-1.56,6.69-2.88,13.23-4,19.64-.1.65-.22,1.3-.32,1.95l-.24,1.51q-.45,2.94-.82,5.89c-.06.43-.11.87-.16,1.3-.2,1.59-.38,3.19-.55,4.79l-.18,1.81c-.17,1.68-.32,3.37-.45,5.06l-.09,1q-.23,3-.38,6.05c0,.53-.05,1.07-.08,1.6q-.11,2.36-.18,4.71c0,.59,0,1.18-.05,1.77,0,2.05-.07,4.11-.07,6.17v.1q0,3.31.08,6.62c0,.76.06,1.52.08,2.28.05,1.47.1,2.94.17,4.41.05.89.11,1.77.16,2.66.08,1.33.16,2.66.25,4,.07,1,.16,1.89.24,2.83.11,1.26.21,2.52.34,3.77.09,1,.21,1.94.31,2.91.14,1.21.27,2.43.42,3.64.12,1,.26,2,.39,2.95.16,1.18.33,2.37.5,3.55.15,1,.31,2,.47,3,.19,1.16.37,2.33.58,3.49.17,1,.35,2,.54,3,.21,1.15.43,2.3.66,3.44s.4,2,.61,3c.24,1.14.48,2.27.74,3.4s.45,2,.68,2.93c.26,1.13.54,2.25.82,3.36s.49,1.95.75,2.91c.29,1.12.59,2.23.9,3.34.27,1,.53,1.92.81,2.87.32,1.11.65,2.21,1,3.31s.57,1.89.87,2.84.71,2.19,1.07,3.28c.31.93.61,1.87.93,2.8l1.15,3.27,1,2.74c.41,1.09.83,2.18,1.25,3.27.34.89.68,1.79,1,2.68.44,1.09.89,2.19,1.34,3.28.36.86.71,1.73,1.08,2.59.48,1.12,1,2.22,1.46,3.33.36.83.72,1.65,1.09,2.47.52,1.16,1.07,2.3,1.61,3.44.36.77.71,1.54,1.08,2.3.6,1.26,1.23,2.5,1.86,3.75l.95,1.9q2.88,5.61,6,11.07c.36.62.73,1.23,1.09,1.84.7,1.2,1.39,2.4,2.11,3.58.44.72.89,1.42,1.33,2.14.66,1.07,1.32,2.14,2,3.19.48.76,1,1.5,1.47,2.24.65,1,1.31,2,2,3,.51.76,1,1.52,1.56,2.28.66,1,1.32,1.92,2,2.88.54.77,1.1,1.53,1.65,2.3s1.34,1.85,2,2.77,1.15,1.53,1.72,2.29l2.07,2.7c.59.76,1.19,1.51,1.79,2.26s1.41,1.76,2.12,2.63,1.23,1.49,1.85,2.23,1.44,1.72,2.17,2.57,1.27,1.47,1.91,2.2l2.22,2.5c.65.73,1.31,1.44,2,2.16l1.15,1.25c2.9,1.92-68.91-139.3-2.51-241.08C311.7,440.33,319,439.94,326.66,439.38Z"
        fill={shadow}
      />
      <path
        d="M657.94,378.93s-2.1,20.81-50.63,28.22c23.11,1.6,47.74-.46,71.38-9.51C681.91,401.25,657.94,378.93,657.94,378.93Z"
        fill={shadow}
      />
      <path d="M304.74,441s-11,1.14-30.77-1.89" fill={base} />
      <path
        d="M305.35,447c-.51.08-.81.11-1.19.15s-.71.07-1.07.1c-.7,0-1.39.08-2.08.08-1.37,0-2.73,0-4.08-.16a61,61,0,0,1-8-1.22c-1.31-.29-2.61-.59-3.9-1a31.69,31.69,0,0,1-3.83-1.25,22.55,22.55,0,0,1-7.25-4.59,23.84,23.84,0,0,1,4.11-1.63,31.51,31.51,0,0,1,3.95-.91c2.59-.42,5.12-.55,7.64-.79s5-.39,7.45-.53c1.22-.08,2.44-.12,3.63-.17l1.78,0c.29,0,.59,0,.86,0s.6,0,.73,0Z"
        fill={colors.outline}
      />
      <path d="M677,396.19s-10.71-14.3-40.38-31" fill={base} />
      <path
        d="M672.14,399.78l-1.77-1.91-2-2.12c-1.39-1.41-2.82-2.85-4.27-4.25-2.92-2.82-5.95-5.62-9-8.4s-6.3-5.44-9.43-8.32c-1.56-1.44-3.13-2.91-4.63-4.52a48,48,0,0,1-4.39-5.1,43.5,43.5,0,0,1,6.65,1.34,60,60,0,0,1,6.24,2.24c2,.89,4,1.83,5.91,2.91s3.84,2.13,5.72,3.29A96.15,96.15,0,0,1,672,382.62c1.71,1.45,3.43,2.91,5,4.53.82.79,1.61,1.63,2.39,2.5.39.45.78.87,1.16,1.35s.72.89,1.22,1.59Z"
        fill={colors.outline}
      />
      <path
        d="M421.52,244.56C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-69.46-138.26-2.43-241,61.1-2.32,152.42-14.38,195.78-62.86C496.18,398.87,484,415,486,418.18c2.88,4.51,38.19-5.53,47.84-23.54l.83-3.61c34.72,12.58,91.76,26.59,144,6.61C801.81,535.94,691.29,689,700.3,679a265.78,265.78,0,0,0,69-179c0-86.42-44.28-148.89-44.28-148.89C694.5,296.7,641.5,259.24,580.22,242"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M520.11,249.17a367.15,367.15,0,0,0-42.48,4.93c-3.49.68-7,1.42-10.44,2.06s-6.9,1.61-10.35,2.41l-10.27,2.72c-3.39,1-6.76,2.08-10.14,3.11A312.8,312.8,0,0,0,397,280.14a347.55,347.55,0,0,0-37.25,21A183.48,183.48,0,0,1,394.83,276a218.27,218.27,0,0,1,39.76-17.3c3.47-1,6.93-2.08,10.42-3.05s7-1.82,10.54-2.59,7.1-1.41,10.66-2,7.15-1.08,10.74-1.52A189.39,189.39,0,0,1,520.11,249.17Z"
        fill={colors.white}
      />
      <path
        d="M529.83,233.83a70.16,70.16,0,0,1,15.44-1.92c2.56-.06,5.11,0,7.67.13s5.12.3,7.68.52a138.69,138.69,0,0,1,15.35,2.2A95.37,95.37,0,0,1,591.05,239l-3.9,11.35c-4.61-1.38-9.24-2.78-13.94-4.07s-9.45-2.51-14.25-3.71l-7.25-1.76c-2.43-.57-4.87-1.15-7.3-1.81A85.14,85.14,0,0,1,529.83,233.83Z"
        fill={colors.outline}
      />
      <path
        d="M412.45,241.49a96.65,96.65,0,0,1,13.65-4.15,138.88,138.88,0,0,1,14-2.45c2.34-.28,4.68-.53,7-.71s4.69-.33,7-.34a57.35,57.35,0,0,1,14.27,1.58,77.5,77.5,0,0,1-13.13,5.5c-2.19.73-4.39,1.37-6.59,2l-6.55,1.93c-4.34,1.32-8.67,2.6-12.94,4s-8.52,2.72-12.79,4Z"
        fill={colors.outline}
      />
      <circle cx="514.26" cy="233.25" r="5.84" fill={colors.outline} />
      <circle cx="497.99" cy="233.25" r="4.13" fill={colors.outline} />
    </>
  )
}