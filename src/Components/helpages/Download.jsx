import React from 'react'

function Download() {
  return (
    <div className='container-8 sm:mt-16'>
    <div className="down rounded-2xl bg-gradient1 lg:h-[210px] h-[396px] 
    lg:py-10 lg:px-8 lg:flex lg:justify-between lg:items-center 
    px-4 py-10 sm:text-center">
        <div className="sm:mb-4 sm+:flex-1">
            <h2 className="font-semibold text-white lg:mb-2 mb-4 sm+:text-3xl sm:text-3xl">
                Скачать мобильное приложение Remove-bg.ai
            </h2>
            <p className="font-normal text-white sm:px-2 lg:w-3/4">
                Попробуйте наше мобильное приложение, чтобы насладиться лучшим пользовательским интерфейсом и отличной производительностью
            </p>
        </div>
        <div className="lg:flex lg:flex-col flex-row gap-5 mt-8 lg:mt-5">
            <a rel="nofollow noreferrer" target="_blank" href="https://apps.apple.com/vn/app/snapbg-remove-background-ai/id6450548050">
                <span aria-label="RemoveBg Url" class="inline-block transition hover:opacity-80">
                    <img src="https://assets.remove-bg.ai/images/apple-download.svg" alt="ios app link" class="lg:w-48 sm:w-42 shadow-sm sm:mx-auto" />
                </span>
            </a>
            <a rel="nofollow noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=snapedit.app.magiccut">
                <span aria-label="RemoveBg Url" class="inline-block transition hover:opacity-80">
                    <img src="https://assets.remove-bg.ai/images/android-download.svg" alt="android app link" class="lg:w-48 sm:w-42 h-14 shadow-sm sm:mx-auto" width="176" height="51"/>
                </span>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Download
