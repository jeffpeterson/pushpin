import React from 'react'
import { FileDoc } from './FileContent'

import { ContentProps } from '../../Content'
import ContentTypes from '../../../ContentTypes'
import { useDocument } from '../../../Hooks'

export default function ImageContent({ hypermergeUrl }: ContentProps) {
  const [doc] = useDocument<FileDoc>(hypermergeUrl)

  if (!doc) {
    return null
  }
  if (!doc.hyperfileUrl) {
    return null
  }

  return <img className="Image" alt="" src={doc.hyperfileUrl} />
}

ImageContent.minWidth = 3
ImageContent.minHeight = 3
ImageContent.defaultWidth = 18

interface Attrs {
  hyperfileUrl: string
}

const supportsMimeType = (mimeType) => !!mimeType.match('image/')

ContentTypes.register({
  type: 'image',
  name: 'Image',
  icon: 'image',
  unlisted: true,
  contexts: {
    workspace: ImageContent,
    board: ImageContent,
  },
  supportsMimeType,
})