/** @jsx h */

import h from '../../../helpers/h'

export default function(change) {
  change.setInline({ type: 'comment' })
}

export const input = (
  <value>
    <document>
      <paragraph>
        <hashtag>
          <link>
            <cursor />word
          </link>
        </hashtag>
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <hashtag>
          <comment>
            <cursor />word
          </comment>
        </hashtag>
      </paragraph>
    </document>
  </value>
)
