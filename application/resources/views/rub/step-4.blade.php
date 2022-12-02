<div class="workplace" data-step="4">

		<div class="head-part flex align-center">
			<div class="title tc-grey text-2">Шаг 2/3</div>
			<div class="activity two-third"></div>
		</div>

		<div class="text-middle second-headline">Оставь свой email для связи</div>

		<div class="alert mb-15">
			<div class="text-1 tc-alert">
			Это нужно, чтобы уведомить о статусе заявки и чтобы мы могли связаться и помочь, если что-то пойдет не так
			</div>
		</div>

        <form method="post" action="{{route('form', request()->toArray())}}">

            @method('POST')
            @csrf

            <div class="field-input">
                <input id="email" type="email" name="email" value="mail@example.com">
            </div>

            <div class="text-small tc-grey mt-15">Нажимая на кнопку “продолжить” ты соглашаешься<br /> с политикой в обработке персональных данных</div>

            <div class="buttons-part flex position-absolute p-bottom-120">

                <button class="prev-step arrow">←</button>
                <button class="next-step" type="submit">Продолжить</button>
            </div>
        </form>

	</div>
