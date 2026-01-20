---
date: '2026-01-06T14:27:46Z'
draft: false
title: 'Downloads'
toc: false
---

## GNOME live environment

AerynOS offers a single ISO for installation purposes based on the GNOME Desktop Environment. This ISO is designed to provide a seamless installation experience, allowing users to prepare their system for installation including formatting and partitioning drives as required.

### System Requirements

- Architecture: x86_64-v2
- Firmware: UEFI (CSM Support must be disabled)
- Processor (CPU): Quad-core processor with a minimum clock speed of 2GHz
- System Memory (RAM): 4GB or more
- Storage: At least 40GB of free disk space

### lichen

`lichen` is a brand new TUI-based installer built by the AerynOS team in Rust. It is currently limited in its capability by design whilst AerynOS is currently in alpha status. However, its disign approach allows that we can expand its capabilities, such as offering installation to additional FileSystems as the project progresses.

To utilize `lichen`, users open up a terminal from within the Gnome live environment and run the command `sudo lichen`. Prior to utilizing `lichen`, users should ensure that their system meets the minimum requirements listed above and that you have preformatted your drive with:

- A >=256MB ESP FAT32 partition (type 1 in fdisk).
    This must be manually formatted for the installer to recognise it.
- A 4GB XBOOTLDR FAT32 partition (type 142 in fdisk, bls_boot in gparted).
    This must be manually formatted for the installer to recognise it.
    This partition is large, because it is where the AerynOS kernel and (in the future) rescue image files will be saved.
- A >20 GB system xfs partition
    The larger the xfs system (/ or root) partition is, the more OS /usr directory rollback states it can support in /.moss/.

`lichen` itself is a net installer meaning that, at the time of installation, it will take the latest version of AerynOS' rolling release packages from the "unstable" repository for installation. This therefore means you also need to have an active and stable internet connection during the installation process.

By utilising a net installation process, `lichen` is able to offer a selection of Desktop Environments and Window Managers for installation on the users system **without having to install GNOME first and then transfer over to the users desired environment.**

{{< callout type="info" >}}
  The AerynOS team has plans to develop a GUI for `lichen` to make the installation process more user-friendly as part of our eventual move towards a stable release.
{{< /callout >}}

## Download Links

{{< hextra/hero-button text="Direct Download" link="https://cdn.aerynos.dev/isos/AerynOS-2025.12-GNOME-live-x86_64.iso" >}}
{{< hextra/hero-button text="Torrent Download" link="magnet:?xt=urn:btih:b39b27a9e6e747885af1270061b5582cce14182f&dn=AerynOS-2025.12-GNOME-live-x86_64.iso&xl=2420817920&tr=udp%3A%2F%2Ffosstorrents.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.io%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=http%3A%2F%2Ffosstorrents.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&ws=https://cdn.aerynos.dev/isos/AerynOS-2025.12-GNOME-live-x86_64.iso" >}}
{{< hextra/hero-button text="Verify cheksum" link="https://cdn.aerynos.dev/isos/AerynOS-2025.12-GNOME-live-x86_64.iso.sha256sum" >}}

{{< asciinema 
  file="moss.cast"
  autoplay="true"
  loop="true"
>}}
