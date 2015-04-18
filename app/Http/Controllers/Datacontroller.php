<?php


namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use App\Dataset;

class Datacontroller extends Controller {
	
	public function update() {
		$result = 'fail';
		try {
			$allDatas = Input::all();
			
			foreach ($allDatas as $ikey => $ivalue){
				$model = Dataset::firstOrNew(['key' => $ikey]);
				$model->key = $ikey;
				$model->value = $ivalue;
				$model->save();
			}
			$result = 'success';
			
		} catch (Exception $e) {
			$result = 'fail';
			
		} finally{
			return response()->json(['state' => $result]);
		}
	}
	
	public function fetch() {
		$result = [
				'state' => 'fail',
				'data' => []
		];
		try {
			$allKeys = Input::all();
			
			foreach ($allKeys as $ikey => $ivalue){
				$model = Dataset::where('key', '=', $ikey)->firstOrFail();
				$result['data'][$model->key] = $model->value;
			}
			$result['state'] = 'success';
		} catch (Exception $e) {
			$result['state'] = 'fail';
		} finally{
			return response()->json($result);
		}
	}
	
	public function editView(){
		return view('edit');
	}
}
