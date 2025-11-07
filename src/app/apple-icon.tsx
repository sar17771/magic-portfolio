import { ImageResponse } from 'next/og'
import { person, baseURL } from '@/resources'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`${baseURL}${person.avatar}`}
          alt=""
          width={180}
          height={180}
          style={{
            borderRadius: '20%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

