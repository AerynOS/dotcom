---
title: "A post we never want to have to make!"
date: 2026-05-04T12:00:00Z
authors: [nomadiccore, ermo]
tags: [news]
---

![An image showing the word "Sorry" with three exclamation marks](sorry.jpg)

This is the post I never want to make, where we made errors with our previous ISO release and are having to take steps to fix the issue, including releasing a subsequent ISO to fix the issue.

Over the course of April, the team worked on systemd-presets as a workstream we didn't actually talk about in our April blog post. We thought that all the work had been completed in such a fashion that users wouldn't see any discernible difference whilst allowing us to move closer to "best-practice" approaches.

Unfortunately, due to the way systemd functions, it doesn't natively support a global preset-all approach on first boot, one of the preset approaches we had recently adopted. In combination, our lichen installer was creating the `/etc/machine-id` file which is what systemd users to detect whether a machine is in it's first boot or not.

As such, users on existing systems did not have an issue, but new installs could be broken and we did not detect this as part of our ISO testing process.

Thanks to user feedback, we were able to capture, identify and resolve the issue within 24 hours of the ISO release and we had an updated ISO up for testing within our server by the end of at first day. The fix came via two commits:

1. Lichen: [Fix first boot](https://github.com/AerynOS/lichen/pull/102)
2. Systemd: [Preset-all user services on first-boot](https://github.com/AerynOS/recipes/commit/5c438a8517e1f3e38c45f215c3096ae2ce28ea1a)

Following additional testing with a wider audience on our Zulip server, we have updated the links on our download page to our new ISO so any users downloading the latest ISO won't see these issues.


## How we view the project and our roles in creating it

Since taking over stewardship of AerynOS in the last year, we have consciously reset our own expectations of what we aim to deliver as a product to our users / early adopters. It is a deliberate decision to keep the distro at an alpha tag as there are certain expectations / deliverables for our core tooling we have not yet met.

We know we haven't publicly laid out our roadmap, another deliberate decision, but this all is in service of delivering a product that early adopters (and eventaully users) can rely on without having to worry about "what the hell might go wrong".

There is an ethos within the team that we take seriously our craft, that being to create new and modern tooling that will make delivering and maintaining a Linux distribution significantly easier.

In retrospect, I'm glad that in the year that we have collectively had stewardship of the project, this is the first and only time we have had to rush out a new ISO to fix an issue. We hope to not have this occur again in the future.


## Nvidia module failing for ceratain GPUs

In the background, we have been offering a "best efforts" approach to supporting NVidia GPUs. This is primarily because none of the core team actually usings NVidia GPUs and because NVidia's approach to open source leaves a lot to be desired from a package maintenence point of view.

For an alpha tag distribution that is primarily focused on dogfooding itself, NVidia GPU support has an is still a fairly low priority.

That said, Reilly identifed an issue with our build ordering that causes the NVidia module to fail to work for GPUs that require GSP firmware. With this knowledge, we have implemented a manual fix for now. The underlaying issue was already known to the team, we just hadn't caught that it presented an issue for these particular NVidia GPUs. Fixing that issue in our infrastructure tooling is therefore moving up our priority list.


## Why have monthly ISOs anyway?!

The issue with new installs only presented because of our new ISO release. Had users installed AerynOS from any of our previous ISO's, the distribution would have installed without issue. Last year, we had taken a decision to move to a monthly ISO cadence as part of a wider hearts and minds effort to demonstrate that AerynOS is in good hands and able to consistently deliver progress at a time when there was uncertainty of whether Ikey would return to the project.

However, as a rolling release distro with a net-installer, it doesn't strictly matter which ISO you boot to install AerynOS on your system (or in a VM) given that Lichen will always install the latest version of AerynOS. As such, we are reviewing our release cadence and will likely align releases around a couple of key factors:

1. Major Linux kernel versions for new hardware support
2. Any updates to our actual installer

which will also have a benefit of reducing bandwidth consumption. This won't however affect the frequency of our blog posts as we have found it helpful to communicate often with those following along with the project.


## We actually delivered quite a lot in the last couple of days!

Package / stack updates for this iteration include:

Updates:

- linux stable & gaming 7.0.3
- linux LTS 6.18.26
- linux kernel 7.0.3 and 6.18.26
- Thunderbird 150.0.1
- Rssguard 5.1.0
- gtk-4 4.22.4
- inetutils 2.8
- faugus-launcher 1.18.10
- asciinema 3.2.0
- flatpak 1.16.6
- libvirt 12.3.0
- glib2 2.88.1
- wine 11.8
- enchant 2.8.16

Fixed

- strawberry: Fixed not supporting common audio formats 
- nm-connection-editor: It's now a separate package and can be installed without networkmanager-applet

Added:

- hexyl: A terminal based hex viewer with coloured output
- envision 3.2.0 (VR gaming)
- oxidize: A tool for atomically changing themes in window managers


## oxidize Window Manager theming

One of our community members, [Christian Bendiksen](https://github.com/christian-bendiksen), has been working on automated theming of window managers over the last couple of months. 

His work is now ready to be included in AerynOS and can be used to automate the theming of the four window manager options we have within AerynOS. There are many popular themes already included and Christian has taken the initiative to play around with our new brand colour pallete to make a new Aeryn theme as well!

Over the last few months, Christian and a number of other dedicated contributors have really been building AerynOS' capabilities around our Window Manager offering. To this end, Christian has also created a [package set](https://aerynos.com/blog/2025/08/31/august-2025-project-update/#package-sets) around oxadize to help simplify the process of getting set up with a great Window Management experience without having to go through all the effort of configuring your dotfiles from scratch.... though you absolutely can do this as well!!!

![Use Christian's video uploaded to peertube](get iframe link)


## ISO refresh

With this post, we already have a new latest 2026.05.2 ISO available on our [download](/download/) page.

It incorporates all the changes and package updates highlighted above and as usual, serves as a vessel for you to use `lichen` to install AerynOS on to your system or into a virtual machine.

## Next Steps

The primary focus on the development side is to attempt to get the Versioned Repos, phase2 feature over the finish line as soon as feasible.

Frankly, we have been so focused on getting the Versioned Repos, phase2 feature *right*, that we've scarcely had the mental bandwidth to focus on anything else from the perspective of our larger development arc.

That said -- and assuming we succeed in landing the Versioned Repos, phase2 feature soon -- we will then spend some time on sketching out the details of the upcoming avenues of development that will open up as a result. 

In parallel to that, we hope to spend some time getting our systemd-preset story straight from a packaging perspective, which will give us the ability to enable services as a packaging operation. This will be especially useful when leveraged via our declarative system-model capabilities.


## Supporting the project

Outside of financial donations through Stripe and Ko-fi mentioned above, we are always looking for people to get involved with development and packaging efforts and welcome anyone curious about AerynOS to join us in our Zulip server!

If any hardware vendors are interested in sponsoring the project either financially or through hardware sponsorship, this would be warmly received.

<div style="display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 50px">
<a style="font-weight: bold;
          color: white;
          background-color: #626f47ff;
          padding: 10px 20px;
          text-decoration: none;
          text-align:center;
          border-radius: 5px"
   href=/sponsor/>Sponsor AerynOS</a>
</div>

If you wish to discuss other sponsorship opportunities, such as hosting or hardware sponsorship, please reach out to us at [contact@aerynos.com](mailto:contact@aerynos.com).


## Thank You!

We are very grateful for your support, be it financial or via project contributions in the form of carefully written bug reports, code contributions, design contributions, documentation updates, general feedback, package updates and overall enthusiasm around the project.

We hope that you will continue showing enthusiasm for our project, and that you will want to get involved in whichever way, shape, or form works for you!
