# Settings

A defi-sniper-configs folder will be created in your Documents. Inside you will find three JSON files that contain various settings.

* config.json
* nodeConfig.json
* wallets.json


## Telegram

The telegram.json file is located in the defi-sniper-configs folder in your Documents.

In order for Telegram Scanner and CMC/CG Fastest Alerts Telegram to work, defi-sniper needs to log in to your Telegram account.

To do so, you would need to provide API parameters of your account. Follow these steps:

* Log in to Telegram Core

* Go to API Development Tools and fill in the form as follows:
    * App title - deficli
    * Short name - deficli
    * URL -
    * Platform - Other
    * Description -

* Click on the "Create application" button, and you should see the app configuration.

* Copy the app_id and app_hash, and paste it to your telegram.json file.