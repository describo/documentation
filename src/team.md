---
title: Team
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/marcolarosa.png',
    name: 'Dr Marco La Rosa',
    title: 'Project Lead and Core Developer',
    orgLink: 'https://describo.github.io',
    links: [
      { icon: 'github', link: 'https://github.com/marcolarosa' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marcolarosa/' },
    ]
  },
   {
    avatar: 'https://github.com/beepsoft.png',
    name: 'Balazs E. Pataki',
    title: 'Primary Contributor',
    orgLink: 'https://describo.github.io',
    links: [
      { icon: 'github', link: 'https://github.com/beepsoft' },
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

## Join us

Want to get involved? Organisation is ad-hoc at the moment so the easiest way to get started is
email Marco @ m@lr.id.au and we can chat about how you can join the organisation.
