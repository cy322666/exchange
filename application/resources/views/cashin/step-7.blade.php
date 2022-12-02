@include('template-parts.main.header')
<div class="glowing"></div>
<div class="cashin inner">

    <div class="container active step-alert" id="first">

        @include('cashin.step-alert')

    </div>

    <div class="container  step-7 status_page">

<div class="workplace" data-step="4">


		<div class="z-1 mb-30">Ждем оплату</div>



		<div class="grey-body">

				<div class="flex-between f-width align-center mb-20">
					<div class="tc-grey text-1">Осталось</div>
					<div class="size-3" id="Timer5min"></div>
				</div>

				<div class="separator mt-20 mb-30"></div>

				<div class="flex-between f-width align-center mb-20">
					<div class="tc-grey text-1">Заявка</div>
					<div class="text-1 fw-bold">#{{
                        \App\Models\Exchange::query()
                            ->where('email', request()->get('email'))
                            ->where('lead_status', 'Ждем оплату')
                            ->first()
                            ?->lead_id
                    }}</div>
				</div>


				<div class="flex-between f-width align-center ">
					<div class="tc-grey text-1">Статус</div>
					<div class="red-badge" id="status">Ожидаем оплату</div>
				</div>
		</div>


		<div class="flex-column">
			<a class="mt-15 tc-light-grey text-small support">Связаться с поддержкой</a>
			<a class="mt-15 tc-light-grey text-small canseled">Я не оплатил(а) заявку</a>
			<a class="mt-15 tc-light-grey text-small detail">Детали обмена</a>
		</div>


	</div>
    </div>
    @include('cashin.details')
</div>
@include('template-parts.main.footer')
