---
draft: false
title: 'About AerynOS'
toc: false
---

> Deliver modern, ergonomic tooling and processes that enable the efficient building and shipping of an atomic, reliable, predictable, and performant Linux distribution, which is a joy to use and maintain for its developers, packagers, and users alike.<br>
> — <cite>AerynOS Mission Statement</cite>


## How the pieces fit together

AerynOS is the collective output of brand new tooling and associated processes, engineered from the ground up to deliver a Linux distribution that focuses on reliability, up front predictability, proven performance and efficiency.

Our ground up approach has enabled us to provide atomic updates without requiring reboots or having to utilise containers for package delivery. Part of our design philosophy is to deliver "just enough" flexibility and customizability to end users, without becoming a meta-distribution, and without compromising on predictability or reliability.

Current examples of this include:

- Imperative vs Declarative System Management
  - Imperative: By default, AerynOS utilizes an imperative approach for package management.
  - Declarative: Optionally able to use our system-model approach to declaratively control package installs.
- Rolling Release vs Fixed Release
  - Rolling Release: AerynOS utilizes multiple repositories for a staged rolling release update process; users can choose to opt-in to the volatile branch or stay on the more stable "unstable" branch. The naming of the unstable branch is designed to remind users that our distribution is still in development and is not to be thought of as "stable".
  - Fixed Release: Using our system-model feature, users can opt to stick with the current (or any historic) tagged release more akin to Fixed Release distributions for stability.
- Filesystem agnostic
  - xfs: Our default recommendation as it currently performs the best based on our distributions' specific tooling.
  - ext4: Posible to use but has limitations in the number of {{< term "moss" >}} states can be created and stored.
  - F2FS: Currently the worst performing FS on AerynOS but known to work.
  - TBC: Additional filesystems will be considered as the distribution moves towards a stable release.


## Choice of desktop environments

{{< cards >}}
  {{< card link="https://kde.org/plasma-desktop/" title="KDE Plasma" image="/images/desktops/kde-plasma.svg" >}}
  {{< card link="https://www.gnome.org/" title="GNOME Desktop" image="/images/desktops/gnome.svg" >}}
  {{< card link="https://system76.com/cosmic" title="Cosmic" image="/images/desktops/cosmic.svg" >}}
  {{< card link="https://yalter.github.io/niri/" title="niri" image="https://github.com/user-attachments/assets/07d05cd0-d5dc-4a28-9a35-51bae8f119a0" >}}
  {{< card link="https://swaywm.org/" title="sway" image="/images/desktops/sway.svg" >}}
  {{< card link="https://mangowc.vercel.app/" title="TBC: MangoWM" image="/images/desktops/mangowc.png" >}}
{{< /cards >}}


## Meet the team

The AerynOS team is a diverse group of individuals from different backgrounds, geographic locations and skillsets. We treat each other with respect and understanding, and we work together to create a positive and inclusive environment. In all areas, we encourage contributors and staff to play around, experiment and make mistakes in order to "fail forward"; in AerynOS, making mistakes/derps/booboos/oopsies is considered nature's most efficient learning tool.

Whenever we recruit new team members, we start by sharing our foundational values with them:

{{< callout type="important" >}} 
  Be kind, foster joy, listen, care.
{{< /callout >}}


## Active staff members
{{< cards >}}
  {{< card link="https://github.com/ermo" title="ermo" image="/images/avatars/ermo.png" subtitle="Co-founder, Product Manager and Project Steward" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/tarkah" title="tarkah" image="/images/avatars/tarkah.jpg" subtitle="Staff Developer and Rust enthusiast" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/ReillyBrogan" title="Reilly Brogan" image="/images/avatars/reilly.jpg" subtitle="Staff Developer and Distribution Engineer" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/NomadicCore" title="NomadicCore" image="/images/avatars/nomadiccore.png" subtitle="Comms, Business Strategy, Outreach, and Documentation Editor" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/jplatte" title="jplatte" image="/images/avatars/jplatte.jpg" subtitle="Staff Developer and Rust enthusiast" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/joebonrichie" title="Joey Riches" image="/images/avatars/joey.png" subtitle="Staff developer and Distribution Engineer" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/bhh32" title="Bryan Hyland" image="/images/avatars/bryan.png" subtitle="Staff Developer, Rust enthusiast and Cosmic Maintainer" tag="Active" tagColor="green" >}}
  {{< card link="https://github.com/CookieSource" title="cookiesource" image="/images/avatars/cookiesource.png" subtitle="Documentation Editor" tag="Active" tagColor="green" >}}
{{< /cards >}}

## Retired
{{< cards >}}
  {{< card link="https://github.com/ikeycode" title="ikey" image="/images/avatars/ikey.jpg" subtitle="Founder, former Lead Developer, Distribution Engineer and Project Lead" tag="Retired" tagColor="red" >}}
  {{< card link="https://github.com/sunnyflunk" title="sunnyflunk" image="/images/avatars/sunnyflunk.png" subtitle="Co-founder, former Distribution Engineer and Performance Specialist" tag="Retired" tagColor="red" >}}
  {{< card link="https://github.com/ulaas" title="ulaas" image="/images/avatars/ulaas.png" subtitle="Co-founder, former Project Manager" tag="Retired" tagColor="red" >}}
  {{< card link="https://github.com/der-eismann" title="der-eismann" image="/images/avatars/der-eismann.jpg" subtitle="former DevOps Engineer" tag="Retired" tagColor="red" >}}
{{< /cards >}}


