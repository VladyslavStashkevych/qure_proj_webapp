const popupLinks = document.querySelectorALL(".popup-link");
const body = document.querySelector('body');
const lockPadding = document.querySelectorALL('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) 
{
	for(let pl of popupLinks)
	{
		const popupLink = pl
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorALL('.close-popup');
if(popupCloseIcon.length > 0)
{
	for(let pci of popupCloseIcon)
	{
		const el = pci;
		el.addEventListener('click', function (e)
		{
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup)
{
	if(curentPopup && unlock)
	{
		const popupActive = document.querySelector('.popup.open');
		if(popupActive)
		{
			popupClose(popupActive, false);
		}
		else
		{
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function(e)
		{
			if(!e.target.closest('popup__content'))
			{
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnLock = true)
{
	if(unlock)
	{
		popupActive.classList.remove('open');
		if(doUnLock)
		{
			bodyUnLock();
		}
	}
}

function bodyLock()
{
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if(lockPadding.length > 0)
	{
		for(let lp of lockPadding)
		{
			const el = lp;
			el.style.paddingRight = lockPaddingValue
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');

		unlock = false;
		setTimeout(function ()
		{
		unlock = true;
		}, timeout);
	}
}

function bodyUnLock()
{
	setTimeout(function ()
	{
		if(lockPadding.length > 0)
		{
			for(let lp of lockPadding
			{
				const el = lp;
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () 
	{
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e)
{
	if(e.which === 27)
	{
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

