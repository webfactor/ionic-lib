import { Injectable } from '@angular/core';
import {
    AdMobFree,
    AdMobFreeBannerConfig,
    AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';

@Injectable()
export class AdmobService {
    private bannerIds: { android: string; ios: string } = {
        // admob test ids
        android: 'ca-app-pub-3940256099942544/6300978111',
        ios: 'ca-app-pub-3940256099942544/6300978111'
    };

    private interstitialIds: { android: string; ios: string } = {
        // admob test ids
        android: 'ca-app-pub-3940256099942544/1033173712',
        ios: 'ca-app-pub-3940256099942544/1033173712'
    };

    private bannerConfig: AdMobFreeBannerConfig = {
        id: null,
        isTesting: false,
        autoShow: false,
        bannerAtTop: false
    };

    private interstitialConfig: AdMobFreeInterstitialConfig = {
        id: null,
        isTesting: false,
        autoShow: false
    };

    constructor(private admobFree: AdMobFree, public platform: Platform) {
        this.setPlatform();
    }

    private setPlatform() {
        this.bannerConfig.id = this.platform.is('ios')
            ? this.bannerIds.ios
            : this.bannerIds.android;

        this.interstitialConfig.id = this.platform.is('ios')
            ? this.interstitialIds.ios
            : this.interstitialIds.android;
    }

    setBannerIds(ids: { android: string; ios: string }): void {
        this.bannerIds = ids;
        this.setPlatform();
    }

    setInterstitialIds(ids: { android: string; ios: string }): void {
        this.interstitialIds = ids;
        this.setPlatform();
    }

    prepareBanner(
        autoShow: boolean = false,
        bannerAtTop: boolean = false,
        isTesting: boolean = false
    ): Promise<any> {
        this.bannerConfig.autoShow = autoShow;
        this.bannerConfig.bannerAtTop = bannerAtTop;
        this.bannerConfig.isTesting = isTesting;

        this.admobFree.banner.config(this.bannerConfig);

        return this.admobFree.banner.prepare();
    }

    showBanner(): Promise<any> {
        return this.admobFree.banner.show();
    }

    hideBanner(): Promise<any> {
        return this.admobFree.banner.show();
    }

    removeBanner(): Promise<any> {
        return this.admobFree.banner.remove();
    }

    async prepareInterstitial(autoShow: boolean = false, isTesting: boolean = false): Promise<any> {
        let isReady = await this.admobFree.interstitial.isReady();
        if (isReady) return Promise.resolve();

        this.interstitialConfig.autoShow = autoShow;
        this.interstitialConfig.isTesting = isTesting;

        this.admobFree.interstitial.config(this.interstitialConfig);
        return this.admobFree.interstitial.prepare();
    }

    async showInterstitial(): Promise<any> {
        let isReady = await this.admobFree.interstitial.isReady();
        if (!isReady) return Promise.reject(isReady);

        return this.admobFree.interstitial.show();
    }
}
